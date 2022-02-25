import React, { Component } from "react";
import {
  ReactiveBase,
  DataSearch,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SingleRange,
} from "@appbaseio/reactivesearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="movie_app_final"
        url="https://b7GLrKxsd:095e2eab-3800-491b-abf6-6b15cf8edf87@appbase-demo-ansible-abxiydt-arc.searchbase.io"
        enableAppbase
        theme={{
          typography: {
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
            fontSize: "16px",
          },
          colors: {
            textColor: "#fff",
            backgroundColor: "#212121",
            primaryTextColor: "#fff",
            primaryColor: "#2196F3",
            titleColor: "#fff",
            alertColor: "#d9534f",
            borderColor: "#666",
          },
        }}
      >
        <DataSearch
          componentId="mainSearch"
          dataField={["original_title"]}
          categoryField="title"
          className="search-bar"
          queryFormat="and"
          placeholder="Search for movies..."
          iconPosition="left"
          autosuggest={false}
          filterLabel="search"
        />
        <MultiList
          componentId="genres-list"
          dataField="genres_data.raw"
          className="genres-filter"
          size={20}
          sortBy="asc"
          queryFormat="or"
          selectAllLabel="All Genres"
          showCheckbox={true}
          showCount={true}
          showSearch={true}
          placeholder="Search for a Genre"
          react={{
            and: [
              "mainSearch",
              "results",
              "date-filter",
              "RangeSlider",
              "language-list",
              "revenue-list",
            ],
          }}
          showFilter={true}
          filterLabel="Genre"
          URLParams={false}
          innerClass={{
            label: "list-item",
            input: "list-input",
          }}
        />
        <SingleRange
          componentId="revenue-list"
          dataField="ran_revenue"
          className="revenue-filter"
          data={[
            { start: 0, end: 1000, label: "< 1M" },
            { start: 1000, end: 10000, label: "1M-10M" },
            { start: 10000, end: 500000, label: "10M-500M" },
            { start: 500000, end: 1000000, label: "500M-1B" },
            { start: 1000000, end: 10000000, label: "> 1B" },
          ]}
          showRadio={true}
          showFilter={true}
          filterLabel="Revenue"
          URLParams={false}
          innerClass={{
            label: "revenue-label",
            radio: "revenue-radio",
          }}
        />
        <hr />
        <RangeSlider
          componentId="RangeSlider"
          dataField="vote_average"
          className="review-filter"
          range={{
            start: 0,
            end: 10,
          }}
          rangeLabels={{
            start: "0",
            end: "10",
          }}
          react={{
            and: [
              "mainSearch",
              "results",
              "language-list",
              "date-Filter",
              "genres-list",
              "revenue-list",
            ],
          }}
        />
        <hr />
        <MultiDataList
          componentId="language-list"
          dataField="original_language.raw"
          className="language-filter"
          size={100}
          sortBy="asc"
          queryFormat="or"
          selectAllLabel="All Languages"
          showCheckbox={true}
          showSearch={true}
          placeholder="Search for a language"
          react={{
            and: [
              "mainSearch",
              "results",
              "date-filter",
              "RangeSlider",
              "genres-list",
              "revenue-list",
            ],
          }}
          data={[
            {
              label: "English",
              value: "English",
            },
            {
              label: "Chinese",
              value: "Chinese",
            },
            {
              label: "Turkish",
              value: "Turkish",
            },
            {
              label: "Swedish",
              value: "Swedish",
            },
            {
              label: "Russian",
              value: "Russian",
            },
            {
              label: "Portuguese",
              value: "Portuguese",
            },
            {
              label: "Korean",
              value: "Korean",
            },
            {
              label: "Japanese",
              value: "Japanese",
            },
            {
              label: "Italian",
              value: "Italian",
            },
            {
              label: "Hindi",
              value: "Hindi",
            },
            {
              label: "French",
              value: "French",
            },
            {
              label: "Finnish",
              value: "Finnish",
            },
            {
              label: "Spanish",
              value: "Spanish",
            },
            {
              label: "Deutsch",
              value: "Deutsch",
            },
          ]}
          showFilter={true}
          filterLabel="Language"
          URLParams={false}
          innerClass={{
            label: "list-item",
            input: "list-input",
          }}
        />
        <hr />
        <DateRange
          componentId="date-filter"
          dataField="release_date"
          className="datePicker"
        />
      </ReactiveBase>
    );
  }
}

export default App;
