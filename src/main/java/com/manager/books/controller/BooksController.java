package com.manager.books.controller;

import com.manager.books.model.Books;
import com.manager.books.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BooksController {

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "/books")
    public List<Books> findAllBooks() {
        return bookService.findAll();
    }

    @RequestMapping(value = "/books/{title}")
    public Books findByTitle(@PathVariable final String title) {
        return bookService.findByName(title);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public Books addBook(@RequestBody final Books books) {
        bookService.save(books);
        return bookService.findByName(books.getTitle());
    }

}
