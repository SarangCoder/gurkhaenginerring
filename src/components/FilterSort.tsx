import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { FilterOptions } from '../types/types';

interface FilterSortProps {
  onFilterChange: (filters: FilterOptions) => void;
  onSortChange: (sortBy: string) => void;
  availableFilters: {
    categories: string[];
    priceRange: { min: number; max: number };
    materials: string[];
    colors: string[];
  };
  currentCategory?: string;
}

const FilterSort: React.FC<FilterSortProps> = ({ 
  onFilterChange, 
  onSortChange, 
  availableFilters,
  currentCategory
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(currentCategory);
  const [priceRange, setPriceRange] = useState<[number, number]>([
    availableFilters.priceRange.min,
    availableFilters.priceRange.max
  ]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Update filters when external category changes
  useEffect(() => {
    setSelectedCategory(currentCategory);
  }, [currentCategory]);

  // Apply filters when any filter state changes
  useEffect(() => {
    const filters: FilterOptions = {};
    
    if (selectedCategory) {
      filters.category = selectedCategory;
    }
    
    filters.priceRange = {
      min: priceRange[0],
      max: priceRange[1]
    };
    
    if (selectedMaterials.length > 0) {
      filters.materials = selectedMaterials;
    }
    
    if (selectedColors.length > 0) {
      filters.colors = selectedColors;
    }
    
    if (inStockOnly) {
      filters.inStock = true;
    }
    
    onFilterChange(filters);
  }, [selectedCategory, priceRange, selectedMaterials, selectedColors, inStockOnly, onFilterChange]);

  // Handle sort change
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortBy(value);
    onSortChange(value);
  };

  // Toggle material selection
  const toggleMaterial = (material: string) => {
    setSelectedMaterials(prev => 
      prev.includes(material) 
        ? prev.filter(m => m !== material) 
        : [...prev, material]
    );
  };

  // Toggle color selection
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(currentCategory);
    setPriceRange([availableFilters.priceRange.min, availableFilters.priceRange.max]);
    setSelectedMaterials([]);
    setSelectedColors([]);
    setInStockOnly(false);
  };

  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (priceRange[0] > availableFilters.priceRange.min || priceRange[1] < availableFilters.priceRange.max) count++;
    if (selectedMaterials.length > 0) count++;
    if (selectedColors.length > 0) count++;
    if (inStockOnly) count++;
    return count;
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
        >
          <SlidersHorizontal size={20} />
          <span>Filters</span>
          {getActiveFilterCount() > 0 && (
            <span className="bg-emerald-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {getActiveFilterCount()}
            </span>
          )}
        </button>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>

      {/* Filter panel */}
      {isFilterOpen && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Price Range */}
          <div>
            <h3 className="font-medium mb-3">Price Range</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">${priceRange[0]}</span>
                <span className="text-sm text-gray-600">${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min={availableFilters.priceRange.min}
                max={availableFilters.priceRange.max}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full accent-emerald-600"
              />
              <input
                type="range"
                min={availableFilters.priceRange.min}
                max={availableFilters.priceRange.max}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full accent-emerald-600"
              />
            </div>
          </div>

          {/* Materials */}
          <div>
            <h3 className="font-medium mb-3">Materials</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableFilters.materials.map((material) => (
                <label key={material} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(material)}
                    onChange={() => toggleMaterial(material)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                  />
                  <span>{material}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div>
            <h3 className="font-medium mb-3">Colors</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {availableFilters.colors.map((color) => (
                <label key={color} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleColor(color)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Filters */}
          <div>
            <h3 className="font-medium mb-3">Additional Filters</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={() => setInStockOnly(!inStockOnly)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 mr-2"
                />
                <span>In Stock Only</span>
              </label>
            </div>
            
            <button
              onClick={clearFilters}
              className="mt-6 flex items-center text-emerald-600 hover:text-emerald-800"
            >
              <X size={16} className="mr-1" />
              Clear all filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSort;