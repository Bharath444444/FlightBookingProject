package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.details;
@Repository
public interface detailsrepository extends JpaRepository<details, Long>{

}
