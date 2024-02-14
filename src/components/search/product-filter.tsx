'use client';

import { Paper, PaperTitle } from '@/components/common/paper';
import { Checkbox, CheckboxGroup } from '@/components/forms/checkbox-group';
import { RadioGroup, RadioGroupItem } from '@/components/forms/radio-group';
import { useFilterProducts } from '@/components/search/search-hooks';
import type {
  ProductFilterData,
  ProductFilterOptions,
} from '@/components/search/search-types';
import {
  ProductFilterKey,
  getValuesOfSelectedOptions,
} from '@/components/search/search-utils';
import { useSearchParams } from 'next/navigation';

// To render filter skeleton during the initial fetch.
const defaultOptions: ProductFilterOptions = {
  sortings: {
    title: 'Sorting',
    options: [],
    filterKey: ProductFilterKey.SORTING,
  },
  categories: {
    title: 'Categories',
    options: [],
    filterKey: ProductFilterKey.CATEGORIES,
  },
  priceRanges: {
    title: 'Price',
    options: [],
    filterKey: ProductFilterKey.PRICE_RANGES,
  },
};

export function ProductFilter() {
  const { data, isLoading, isValidating } = useFilterProducts({
    revalidateIfStale: false,
  });

 
  const isDisabled = isValidating;
  const values = getValuesOfSelectedOptions(data?.selectedOptions);
  const searchParams = useSearchParams();

  const handleChange = (
    filterKey: ProductFilterData['filterKey'],
    newValue: string[],
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(filterKey);

    newValue.forEach((value) => {
      params.append(filterKey, value);
    });

    window.history.pushState(null, '', `?${params.toString()}`);
  };

  const isFirstLoading = isLoading && !data;

  return (
    <div className="flex flex-col gap-6 pb-6">
      {Object.values(data?.filterOptions ?? defaultOptions).map((filter) => {
        let filterInput = null;

        switch (filter.filterKey) {
          case ProductFilterKey.PRICE_RANGES:
          case ProductFilterKey.CATEGORIES:
          
            filterInput = (
              <CheckboxGroup
                isLoading={isFirstLoading}
                isDisabled={isDisabled}
                value={values[filter.filterKey]}
                onChange={(newValue) => {
                  handleChange(filter.filterKey, newValue);
                }}
              >
                {filter.options.map((option) => {
                  return (
                    <Checkbox key={option.value} value={option.value}>
                      {option.title}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            );
            break;
          case ProductFilterKey.SORTING:
            filterInput = (
              <RadioGroup
                isLoading={isFirstLoading}
                isDisabled={isDisabled}
                value={values[filter.filterKey]}
                onChange={(newValue) => {
                  handleChange(filter.filterKey, [newValue]);
                }}
              >
                {filter.options.map((option) => {
                  return (
                    <RadioGroupItem key={option.value} value={option.value}>
                      {option.title}
                    </RadioGroupItem>
                  );
                })}
              </RadioGroup>
            );
        }

        return (
          <div key={filter.filterKey}>
            <PaperTitle>{filter.title}</PaperTitle>
            <Paper>{filterInput}</Paper>
          </div>
        );
    })}
    </div>
  );
}
