package com.sample.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sample.model.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {

	@Query(value = "SELECT * FROM user WHERE name =:name and password=:password", nativeQuery = true)
	List<User> findAllActiveUsersNative(@Param(value = "name") String name, @Param(value = "password") String password);
	
	//---------find user by userName id---------
	@Query(value="SELECT * FROM user WHERE name =:name", nativeQuery = true)
	public User findbyUserName(@Param(value = "name") String name);
}
