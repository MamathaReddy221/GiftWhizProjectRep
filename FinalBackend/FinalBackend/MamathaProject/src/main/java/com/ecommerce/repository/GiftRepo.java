package com.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.Gift;

public interface GiftRepo  extends JpaRepository<Gift, Long>{

}
