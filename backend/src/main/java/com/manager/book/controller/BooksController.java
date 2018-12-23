package com.manager.book.controller;

import com.manager.book.model.Books;
import com.manager.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class BooksController {

    @Autowired
    private BookService bookService;


    @RequestMapping(value = "/books")
    public List<Books> findAllBooks() {
        return bookService.findAll();
    }

    @RequestMapping(value = "/books/{id}")
    public Books findByTitle(@PathVariable final int id) {
        return bookService.findByName(id);
    }

    @RequestMapping(method = RequestMethod.POST, value = "/books")
    public Books addBook(@RequestBody final Books books) {
        bookService.save(books);
        return bookService.findByName(books.getId());
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/books/{id}")
    public void updateBook(@PathVariable int id, @RequestBody Books books) {
        bookService.updateBook(id, books);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/books/{id}")
    public void deleteBook(@PathVariable int id, Books books) {
        bookService.deleteBook(books);
    }

}
