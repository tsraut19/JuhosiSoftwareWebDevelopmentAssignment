package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.model.UserData;

@Repository
public interface UserDataDao extends JpaRepository<UserData, Integer> {

	
	
}
