package com.example.blmediagroup;

import com.example.blmediagroup.models.Testimony;
import com.example.blmediagroup.services.TestimonyService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping(path = "/testimony")
public class TestimonyController {
    private TestimonyService testimonyService;
    TestimonyController(TestimonyService testimonyService){
        this.testimonyService = testimonyService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Testimony> getTestimony(@PathVariable String id){
        Testimony testimony = this.testimonyService.getTestimony(id);
        if(testimony == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(testimony);
    }

    @GetMapping("")
    public ResponseEntity<ArrayList<Testimony>> getTestimonies(@PathVariable String id){
        ArrayList<Testimony> testimonies = this.testimonyService.getTestimonies();
        return ResponseEntity.ok(testimonies);
    }

    @ResponseBody
    @PostMapping("")
    public ResponseEntity<Void> createTestimony(@RequestBody Testimony testimony){
        this.testimonyService.createTestimony(testimony);
        return ResponseEntity.ok().build();
    }

    @ResponseBody
    @PutMapping("")
    public ResponseEntity<Void> updateTestimony(@RequestBody Testimony testimony){
        this.testimonyService.updateTestimony(testimony);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{/id}")
    public ResponseEntity<Void> deleteTestimony(@PathVariable String id){
        this.testimonyService.deleteTestimony(id);
        return ResponseEntity.ok().build();
    }
}
