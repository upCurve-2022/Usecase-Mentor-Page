package com.upcurve.demo.repository;

import com.upcurve.demo.model.mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface mentorRepository extends JpaRepository<mentor,Long> {
}
