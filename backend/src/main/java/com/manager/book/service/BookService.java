package com.manager.book.service;

import com.manager.book.model.Books;
import com.manager.book.repository.BookJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BookService {

    @Autowired
    BookJpaRepository bookJpaRepository;

    public List<Books> findAll() {
        return bookJpaRepository.findAll();
    }

    public Books findByName(int id) {
        return bookJpaRepository.findById(id).orElse(null);
    }

    public void save(Books books) {
        bookJpaRepository.save(books);
    }

    public void updateBook(int id, Books books) {
        books.setDate(new Date());
        bookJpaRepository.save(books);
    }

    public void deleteBook(Books books) {
        bookJpaRepository.delete(books);
    }
}
