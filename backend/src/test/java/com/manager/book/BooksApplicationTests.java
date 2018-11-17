package com.manager.book;

import com.manager.book.model.Books;
import com.manager.book.repository.BookJpaRepository;
import com.manager.book.service.BookService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.List;

import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class BooksApplicationTests {

    @Mock
    BookJpaRepository bookJpaRepository;
    @InjectMocks
    BookService bookService;

    @Test
    public void testUseFindAll() throws Exception {
        // testing
        List<Books> all = bookService.findAll();
        // validate
        verify(bookJpaRepository).findAll();
    }

    @Test
    public void testUseFindById() throws Exception {
        // testing
        Books byName = bookService.findByName(1);
        // validate
        verify(bookJpaRepository).findById(1);
    }

    @Test
    public void testUseSave() throws Exception {
        Books books = new Books();
        // testing
        bookService.save(books);
        // validate
        verify(bookJpaRepository).save(books);
    }

    @Test
    public void testUseUpdate() throws Exception {
        Books books = new Books();
        // testing
        bookService.updateBook(1, books);
        // validate
        verify(bookJpaRepository).save(books);
    }

    @Test
    public void testUseDelete() throws Exception {
        Books books = new Books();
        // testing
        bookService.deleteBook(books);
        // validate
        verify(bookJpaRepository).delete(books);
    }

}
