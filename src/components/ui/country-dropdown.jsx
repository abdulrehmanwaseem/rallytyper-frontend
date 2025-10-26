"use client";
import React, { useCallback, useState, forwardRef, useEffect } from "react";

// shadcn
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// utils
import { cn } from "@/lib/utils";

// assets
import { ChevronDown, CheckIcon, Globe } from "lucide-react";

// data
import countriesData from "@/data/countries.json";

// Dropdown props
const CountryDropdownComponent = (
  {
    onChange,
    value,
    disabled = false,
    placeholder = "Select a country",
    ...props
  },
  ref
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  useEffect(() => {
    if (value) {
      const initialCountry = countriesData.find(
        (country) => country.name === value
      );
      if (initialCountry) {
        setSelectedCountry(initialCountry);
      } else {
        setSelectedCountry(undefined);
      }
    } else {
      setSelectedCountry(undefined);
    }
  }, [value]);

  const handleSelect = useCallback(
    (country) => {
      setSelectedCountry(country);
      onChange?.(country.name);
      setOpen(false);
    },
    [onChange]
  );

  const triggerClasses = cn(
    "flex h-12 w-full items-center justify-between whitespace-nowrap rounded-lg border border-[#DFDFDF] bg-[#FFFEF4] pr-3 py-2 text-base text-sm shadow-sm  ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
    selectedCountry ? "pl-3" : "pl-11"
  );

  return (
    <div className="relative">
      {!selectedCountry && (
        <Globe
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10 pointer-events-none"
          size={20}
        />
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          ref={ref}
          className={triggerClasses}
          disabled={disabled}
          {...props}
          style={{ fontFamily: "Lato, sans-serif" }}
        >
          {selectedCountry ? (
            <div className="flex items-center flex-grow w-0 gap-2 overflow-hidden">
              <div className="inline-flex items-center justify-center w-5 h-4 shrink-0 overflow-hidden">
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className="w-5 h-4 object-cover"
                />
              </div>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                {selectedCountry.name}
              </span>
            </div>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <ChevronDown className="h-4 w-4 opacity-50" />
        </PopoverTrigger>
        <PopoverContent
          collisionPadding={10}
          side="bottom"
          className="min-w-[--radix-popper-anchor-width] p-0"
        >
          <Command className="w-full max-h-[270px]" shouldFilter={true}>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countriesData.map((option, key) => (
                  <CommandItem
                    className="flex items-center w-full gap-2"
                    key={key}
                    onSelect={() => handleSelect(option)}
                    value={option.name}
                    keywords={[
                      option.name.toLowerCase(),
                      option.code.toLowerCase(),
                    ]}
                  >
                    <div className="flex flex-grow w-0 space-x-2 overflow-hidden">
                      <div className="inline-flex items-center justify-center w-5 h-4 shrink-0 overflow-hidden">
                        <img
                          src={option.flag}
                          alt={option.name}
                          className="w-5 h-4 object-cover"
                        />
                      </div>
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {option.name}
                      </span>
                    </div>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4 shrink-0",
                        option.name === selectedCountry?.name
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

CountryDropdownComponent.displayName = "CountryDropdownComponent";

export const CountryDropdown = forwardRef(CountryDropdownComponent);
