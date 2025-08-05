"use client";

import { useState } from "react";
import { HistoryCard } from "@/types/History";
import Card from "./Card";

export default function Body() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cards, setCards] = useState<HistoryCard[]>([
    {
      date: "04/08/2025",
      items: [
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
      ],
    },
        {
      date: "04/08/2025",
      items: [
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
      ],
    },
        {
      date: "04/08/2025",
      items: [
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
      ],
    },
        {
      date: "04/08/2025",
      items: [
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
      ],
    },
        {
      date: "04/08/2025",
      items: [
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
      ],
    },
        {
      date: "04/08/2025",
      items: [
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 1,
          field: "users",
        },
                {
          type: "listou",
          quantity: 1,
          field: "users",
        },
        {
          type: "listou",
          quantity: 100,
          field: "users",
        },
      ],
    },
  ]);
  return (
    <div className="hide-scrollbar mb-3 w-[100%] h-[100%] pl-5 flex flex-col items-center justify-start overflow-y-scroll scrollbar-none">
      {cards.map((element, index) => {
        return (
          <Card
            key={index}
            date={element.date}
            items={element.items}
          />
        );
      })}
    </div>
  );
}
