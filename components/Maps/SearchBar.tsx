"use client";
import React from "react";

export interface SearchResult {
  lat: number;
  lon: number;
  display_name: string;
}

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSubmit: () => void;
  results: SearchResult[];
  onSelect: (result: SearchResult) => void;
  isSearching: boolean;
  showResults: boolean;
  setShowResults: (value: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  onQueryChange,
  onSubmit,
  results,
  onSelect,
  isSearching,
  showResults,
  setShowResults,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="relative"
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          onFocus={() => results.length > 0 && setShowResults(true)}
          placeholder="Cari alamat atau lokasi..."
          className="w-full px-4 py-3 pr-12 text-sm text-ellipsis overflow-hidden whitespace-nowrap bg-white border border-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
        >
          {isSearching ? (
            <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          )}
        </button>
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
          {results.map((result, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                onSelect(result);
                setShowResults(false);
              }}
              className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-gray-50"
            >
              <div className="font-medium text-gray-900 truncate">
                {result.display_name.split(",")[0]}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {result.display_name}
              </div>
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
