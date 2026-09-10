import { useEffect, useState } from "react";

import Header from "./component/Header";
import CategoryNav from "./component/NavBar";
import Categories from "./component/Categories";
import ProductList from "./component/ProductList";
import SellBanner from "./component/SellBanner";
import Footer from "./component/Footer";

import type { Product } from "./storage/product";

import "./App.css";
import SecondFooter from "./component/SecondFooter";
import TryOlx from "./component/TryOlx";
import DownloadApp from "./component/DownloadingApp";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("");

  const [products, setProducts] = useState<Product[]>(
    []
  );

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] =
    useState(false);

  const [skip, setSkip] = useState(0);

  const limit = 12;

  const locations = [
    "VITAD BICHOLIM",
    "DELHI",
    "NOIDA",
    "GURGAON",
    "MUMBAI",
    "BANGALORE",
    "PUNE",
    "HYDERABAD",
    "CHENNAI",
    "JAIPUR",
    "LUCKNOW",
    "CHANDIGARH",
  ];

  const dates = [
    "AUG 12",
    "AUG 14",
    "AUG 16",
    "AUG 18",
    "AUG 20",
    "AUG 22",
    "AUG 24",
    "AUG 26",
    "AUG 28",
    "AUG 30",
    "SEP 01",
    "SEP 03",
  ];

  function formatProducts(apiProducts: any[]): Product[] {
    return apiProducts.map((product, index) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail,

      location:
        locations[index % locations.length],

      date: dates[index % dates.length],
    }));
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=0`
        );

        const data = await response.json();

        const formattedProducts = formatProducts(
          data.products
        );

        setProducts(formattedProducts);
      } catch (error) {
        console.error(
          "Failed to fetch products:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  async function handleLoadMore() {
    try {
      setLoadingMore(true);

      const nextSkip = skip + limit;

      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${nextSkip}`
      );

      const data = await response.json();

      const formattedProducts = formatProducts(
        data.products
      );

      setProducts((previousProducts) => [
        ...previousProducts,
        ...formattedProducts,
      ]);

      setSkip(nextSkip);
    } catch (error) {
      console.error(
        "Failed to load more products:",
        error
      );
    } finally {
      setLoadingMore(false);
    }
  }

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }
  );

  return (
    <>
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="page-container">

      <CategoryNav
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <p className="loading-text">
          Loading products...
        </p>
      ) : (
        <>
          <ProductList
            products={filteredProducts}
          />

          <div className="load-more-container">
            <button
              className="load-more-btn"
              type="button"
              onClick={handleLoadMore}
              disabled={loadingMore}
            >
              {loadingMore
                ? "Loading..."
                : "Load more"}
            </button>
          </div>
        </>
      )}

  <TryOlx />

      <Footer />
      <SecondFooter />
      <DownloadApp />
      </main>
    </>
  );
}

export default App;