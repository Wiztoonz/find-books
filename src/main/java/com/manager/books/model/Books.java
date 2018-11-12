package com.manager.books.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Books {

    @Id
    @Column(name = "Title")
    private String title;
    @Column(name = "Description")
    private String description;
    @Column(name = "Date")
    private String date;

    public Books() {
    }

    public Books(String title, String description, String date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
