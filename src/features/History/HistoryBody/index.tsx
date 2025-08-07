"use client";

import { useState } from "react";

import bodyStyles from "./styles";

import HisotryCard from "../layouts/HisotryCard";
import { HistoryCard } from "@/types/History";

export default function HistoryBody() {
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
    <div
      data-name="history-body-container"
      className={bodyStyles["container"]}
    >
      {cards.map((element, index) => {
        return (
          <HisotryCard
            key={index}
            date={element.date}
            items={element.items}
          />
        );
      })}
    </div>
  );
}
