import React, { useState, useEffect } from "react";
import List from "../components/List";
import CreateForm from "../components/CreateForm";
import DeleteModal from "../components/DeleteForm";
import TableComponent from "../components/TableComponent";
import { getItems, createItem, updateItem, deleteItem } from "../utils/api";
import HeaderComp from "../components/HeaderComp";
import "./home.scss";
import { Button, Input } from "antd";
import Footer from "../components/footer";

export default function HomePage() {
  // State variables to manage data and forms
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  // Function to fetch data from API
  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  // Function to handle form submission for creating new item
  const handleCreateFormSubmit = async (formData) => {
    await createItem(formData);
    setIsCreateFormOpen(false);
    fetchItems();
  };

  // Function to handle form submission for updating existing item

  // Function to handle deletion of item
  const handleDeleteItem = async () => {
    await deleteItem(selectedItem.id);
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
    fetchItems();
  };
  const handleSearch = async () => {
    console.log("Search", search);
  };

  // Render components based on state
  return (
    <div>
      <HeaderComp></HeaderComp>
      <div className="grave_content">
        <div className="content_header">
          <h1 className="title">Payments</h1>
          <div className="payments_search">
            <form>
              <Input
              className="input"
                type="text"
                value={search}
                placeholder="Search by Receipt, Grave site, payor"
                onChange={handleSearch}
              />
            </form>
            <Button className="filter" shape="round">
              <img src="./grave/filter.png" alt="maintain"></img> Filter
            </Button>
            <Button className="payment" shape="round">
              + Payment
            </Button>
          </div>
        </div>
        <div className="status">
          3 Payments have not yet been posted
        </div>
        <TableComponent data={items}></TableComponent>
      </div>
    <Footer></Footer>

    </div>
  );
}
