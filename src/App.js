import React, { Component } from "react";
import {
  ReactiveBase,
  SearchBox,
  MultiDataList,
  RangeSlider,
  DateRange,
  MultiList,
  SelectedFilters,
  ReactiveList,
} from "@appbaseio/reactivesearch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      message: "🔬Show Filters",
    };
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
      message: this.state.isClicked ? "🔬 Show Filters" : "🎬 Show Movies",
    });
  }
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
                dataField={["original_title", "original_title.search"]}
                categoryField="genres.keyword"
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
                innerClass={{ list: "list-class" }}
                addonAfter={
              <span tabIndex="1" className="focus-shortcut">
                /
              </span>
            }
              />
            </div>
          </div>
          <div className="sub-container">
            <div
              className={
                this.state.isClicked ? "left-bar-optional" : "left-bar"
              }
            >
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
                    "vote-average-list",
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
                    "vote-average-list",
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
                    "vote-average-list",
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
            <div
              className={
                this.state.isClicked
                  ? "result-container-optional"
                  : "result-container"
              }
            >
              <SelectedFilters
                showClearAll={true}
                clearAllLabel="Clear filters"
                className="selected-filters"
              />
              <ReactiveList
                defaultQuery={() => ({ track_total_hits: true })}
                componentId="results"
                dataField={[
                  { field: "original_title", weight: 3 },
                  { field: "original_title.search", weight: 2 },
                ]}
                react={{
                  and: [
                    "mainSearch",
                    "RangeSlider",
                    "language-list",
                    "date-filter",
                    "genres-list",
                    "vote-average-list",
                  ],
                }}
                pagination={true}
                className="Result_card"
                paginationAt="bottom"
                pages={5}
                size={12}
                Loader="Loading..."
                noResults="No results were found..."
                sortOptions={[
                  {
                    dataField: "vote_count",
                    sortBy: "desc",
                    label: "Sort by vote-count(High to Low) \u00A0",
                  },
                  {
                    dataField: "popularity",
                    sortBy: "desc",
                    label: "Sort by Popularity(High to Low)\u00A0 \u00A0",
                  },
                  {
                    dataField: "vote_average",
                    sortBy: "desc",
                    label: "Sort by Ratings(High to Low) \u00A0",
                  },
                  {
                    dataField: "original_title.keyword",
                    sortBy: "asc",
                    label: "Sort by Title(A-Z) \u00A0",
                  },
                ]}
                innerClass={{
                  title: "result-title",
                  listItem: "result-item",
                  list: "list-container",
                  sortOptions: "sort-options",
                  resultStats: "result-stats",
                  resultsInfo: "result-list-info",
                  poweredBy: "powered-by",
                }}
              >
                {({ data }) => (
                  <ReactiveList.ResultCardsWrapper
                    style={{ margin: "8px 0 0" }}
                  >
                    {data.map((item) => (
                      <div
                        style={{ marginRight: "15px" }}
                        className="main-description"
                      >
                        <div className="ih-item square effect6 top_to_bottom">
                          <a
                            target="#"
                            href={
                              "https://www.google.com/search?q=" +
                              item.original_title
                            }
                          >
                            <div className="img">
                              <img
                                src={item.poster_path}
                                alt={item.original_title}
                                className="result-image"
                              />
                            </div>
                            <div className="info colored">
                              <h3 className="overlay-title">
                                {item.original_title}
                              </h3>

                              <div className="overlay-description">
                                {item.overview}
                              </div>

                              <div className="overlay-info">
                                <div className="rating-time-score-container">
                                  <div className="sub-title Rating-data">
                                    <b>
                                      Ratings
                                      <span className="details">
                                        {" "}
                                        {item.vote_average}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="time-data">
                                    <b>
                                      <span className="time">
                                        <i className="fa fa-clock-o" />{" "}
                                      </span>{" "}
                                      <span className="details">
                                        {item.release_date}
                                      </span>
                                    </b>
                                  </div>
                                  <div className="sub-title Score-data">
                                    <b>
                                      Popularity:
                                      <span className="details">
                                        {" "}
                                        {item.popularity}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                                <div className="vote-average-lang-container">
                                  <div className="sub-title language-data">
                                    <b>
                                      Language:
                                      <span className="details">
                                        {" "}
                                        {item.original_language}
                                      </span>
                                    </b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </ReactiveList.ResultCardsWrapper>
                )}
              </ReactiveList>
            </div>

            <button
              className="toggle-button"
              onClick={this.handleClick.bind(this)}
            >
              {this.state.message}
            </button>
          </div>
        </ReactiveBase>
      </div>
    );
  }
}

export default App;