package com.manager.books.repository;

import com.manager.books.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookJpaRepository extends JpaRepository<Books, String> {

}
