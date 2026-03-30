package com.inventory.app.repository;

import com.inventory.app.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Integer> {

    void deleteByProductId(int productId); // 🔥 IMPORTANT

    List<Purchase> findByUserId(int userId);
}