package com.manager.books.service;

import com.manager.books.model.Books;
import com.manager.books.repository.BookJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookJpaRepository bookJpaRepository;

    public List<Books> findAll() {
        return bookJpaRepository.findAll();
    }

    public Books findByName(String title) {
        return bookJpaRepository.findById(title).orElse(null);
    }


    public void save(Books books) {
        bookJpaRepository.save(books);
    }
}
