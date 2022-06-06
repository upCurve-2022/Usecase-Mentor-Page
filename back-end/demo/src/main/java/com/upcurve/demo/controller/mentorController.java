package com.upcurve.demo.controller;

import com.upcurve.demo.exception.ResourceNotFoundException;
import com.upcurve.demo.model.mentor;
import com.upcurve.demo.repository.mentorRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1/mentors/")
public class mentorController {
    @Autowired
    private mentorRepository MentorRepository;
    @GetMapping("/")
    public List<mentor> getAllMentors(){
        return MentorRepository.findAll();
    }

    @PostMapping("/")
    public mentor createMentor(@RequestBody @NotNull mentor Mentor){
        return MentorRepository.save(Mentor);
    }

    @GetMapping("/{id}")
    public ResponseEntity<mentor> getMentorId(@PathVariable Long id){
       mentor Mentor =MentorRepository.findById(id).orElseThrow(() ->
               new ResourceNotFoundException("Mentor do not exist with the id: "+id));
       return ResponseEntity.ok(Mentor);
    }

   @PutMapping("/{id}")
   public ResponseEntity<mentor> updateMentor(@PathVariable Long id,@RequestBody mentor MentorOriginal){
        mentor mentorObject=MentorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Mentor do not exist with the id: "+id));

        mentorObject.setName(MentorOriginal.getName());
        mentorObject.setExperience(MentorOriginal.getExperience());
        mentorObject.setMailId(MentorOriginal.getMailId());
        mentorObject.setTopic(MentorOriginal.getTopic());
        mentor updatedMentor=MentorRepository.save(mentorObject);
        return ResponseEntity.ok(updatedMentor);
    }

    @DeleteMapping("/{id}")
   public ResponseEntity<Map<String,Boolean>> deleteMentor(@PathVariable Long id){
       mentor mentorObject=MentorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Mentor do not exist with the id: "+id));
        MentorRepository.delete(mentorObject);
        Map<String, Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
