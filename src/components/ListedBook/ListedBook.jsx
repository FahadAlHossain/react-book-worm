import React, { useEffect, useState } from "react";
import { useAsyncError, useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import ReadList from "../ReadList/ReadList";
import WishList from "../WishList/WishList";

const ListedBook = () => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const loadData = useLoaderData();

    useEffect(() =>{
        const getReadList = getStoredReadList();
        const getReadListInt = getReadList.map(id => parseInt(id));
        const getRead = loadData.filter( book => getReadListInt.includes(book.bookId))
        setReadList(getRead);
        
        const getWishList = getStoredWishList();
        const getWishListInt = getWishList.map(id => parseInt(id));
        const getWish = loadData.filter( book => getWishListInt.includes(book.bookId))
        setWishList(getWish);
    },[])

  return (
    <div>
        <h1 className="text-4xl font-bold text-center my-6">Books</h1>
      <Tabs>
        <TabList >
          <Tab>Read</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
         {
            readList.map( book =>  <ReadList key={book.bookId} book={book}></ReadList>)
         }
        </TabPanel>
        <TabPanel>
          {
            wishList.map(book => <WishList key={book.bookId} book={book}></WishList>)
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
