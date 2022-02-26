import React, { Component } from "react";
import {
  ReactiveBase,
  SearchBox,
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
      <div className="main-container">
        <ReactiveBase
          app="movies-demo-app"
          url="https://81719ecd9552:e06db001-a6d8-4cc2-bc43-9c15b1c0c987@appbase-demo-ansible-abxiydt-arc.searchbase.io"
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
          <div className="navbar">
            {" "}
            <div className="logo-container">
              <img
                className="app-logo"
                src="Images/logo.jpg"
                alt="MovieSearch"
              />
            </div>
            <div className="search-container">
              <SearchBox
                componentId="mainSearch"
                dataField={["original_title"]}
                categoryField="title"
                className="search-bar"
                queryFormat="and"
                placeholder="Search for movies..."
                iconPosition="left"
                autosuggest={true}
                filterLabel="search"
                enableRecentSuggestions={true}
                enablePopularSuggestions={true}
                enablePredictiveSuggestions={true}
                popularSuggestionsConfig={{
                  size: 3,
                  minHits: 2,
                  minChars: 4,
                }}
                recentSuggestionsConfig={{
                  size: 3,
                  minChars: 4,
                }}
                index="movies-demo-app"
                size={10}
              />
            </div>
          </div>{" "}
          <div className="left-bar">
            <div>
              {" "}
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-pied-piper-alt" /> Genres{" "}
                </b>
              </div>
              <MultiList
                componentId="genres-list"
                dataField="genres.keyword"
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
                  ],
                }}
                showFilter={true}
                filterLabel="Genre"
                URLParams={false}
                innerClass={{
                  label: "list-item",
                  input: "list-input",
                }}
              />{" "}
              <hr className="blue" />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  <i className="fa fa-star" /> Ratings
                </b>
              </div>
              <RangeSlider
                componentId="RangeSlider"
                dataField="vote_average"
                className="review-filter"
                tooltipTrigger="hover"
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
                  ],
                }}
                showHistogram
              />
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-language" /> Languages{" "}
                </b>
              </div>
              <MultiDataList
                componentId="language-list"
                dataField="original_language.keyword"
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
                  ],
                }}
                data={[
                  {
                    label: "English",
                    value: "en",
                  },
                  {
                    label: "Chinese",
                    value: "zh",
                  },
                  {
                    label: "Turkish",
                    value: "tr",
                  },
                  {
                    label: "Swedish",
                    value: "sv",
                  },
                  {
                    label: "Russian",
                    value: "ru",
                  },
                  {
                    label: "Portuguese",
                    value: "pt",
                  },
                  {
                    label: "Korean",
                    value: "ko",
                  },
                  {
                    label: "Japanese",
                    value: "ja",
                  },
                  {
                    label: "Italian",
                    value: "it",
                  },
                  {
                    label: "Hindi",
                    value: "hi",
                  },
                  {
                    label: "French",
                    value: "fr",
                  },
                  {
                    label: "Finnish",
                    value: "fi",
                  },
                  {
                    label: "Spanish",
                    value: "es",
                  },
                  {
                    label: "Deutsch",
                    value: "de",
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
              <hr className="blue" />
              <div className="filter-heading center">
                <b>
                  {" "}
                  <i className="fa fa-calendar" /> Release Date{" "}
                </b>
              </div>
              <DateRange
                componentId="date-filter"
                dataField="release_date"
                className="datePicker"
              />
            </div>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;
