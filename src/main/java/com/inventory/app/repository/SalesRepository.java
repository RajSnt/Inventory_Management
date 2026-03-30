package com.inventory.app.repository;

import com.inventory.app.model.Sales;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalesRepository extends JpaRepository<Sales, Integer> {

    void deleteByProductId(int productId); // 🔥 IMPORTANT

    List<Sales> findByUserId(int userId);
}