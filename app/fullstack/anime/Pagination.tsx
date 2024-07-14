"use client";

import { useJikan } from "@/store/fullstack/useJikan";
import React, { useCallback, useEffect, useRef, useState } from "react";

export default function PaginationJikan({ lastPage }: { lastPage: number }) {
  const { page, setPage } = useJikan();
  const [editPage, setEditPage] = useState(false);
  const [newPage, setNewPage] = useState(page);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePrev = () => {
    setPage(page - 1);
    if (editPage) setEditPage(false);
  };
  const handleNext = () => {
    setPage(page + 1);
    if (editPage) setEditPage(false);
  };
  const handleChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    setNewPage(val);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newPage || newPage < 1) {
      setNewPage(1);
      setPage(1);
    } else if (newPage > lastPage) {
      setNewPage(lastPage);
      setPage(lastPage);
    } else {
      setPage(newPage);
    }
    setEditPage(false);
  };

  const handleEdit = () => {
    setEditPage(true);
    if (editPage && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleFocus = useCallback(() => {
    if (editPage && inputRef.current) {
      inputRef.current.select();
    }
  }, [editPage]);

  useEffect(() => {
    handleFocus();
  }, [handleFocus]);

  useEffect(() => {
    setNewPage(page);
  }, [page]);

  return (
    <div className="px-3 flex items-center text-white gap-1 py-1 text-sm">
      {page > 1 && (
        <button
          onClick={handlePrev}
          type="button"
          className="p-2 rounded bg-jikan-accent-1 border border-jikan-accent-1 hover:opacity-70"
        >
          Prev
        </button>
      )}
      <div className={`p-2 rounded border border-jikan-accent-1 flex gap-2 justify-between`} onClick={handleEdit}>
        {editPage ? (
          <form onSubmit={handleSubmit} className="w-12">
            <input
              autoFocus
              ref={inputRef}
              type="number"
              value={newPage}
              title="page"
              className="bg-inherit min-w-8 max-w-full spin-btn-none focus:outline-none"
              onChange={handleChangePage}
              onFocus={handleFocus}
            />
          </form>
        ) : (
          <div>{page}</div>
        )}
        <div>of {lastPage}</div>
      </div>
      {page < lastPage && (
        <button
          onClick={handleNext}
          type="button"
          className="p-2 rounded bg-jikan-accent-1 border border-jikan-accent-1 hover:opacity-70"
        >
          Next
        </button>
      )}
    </div>
  );
}
