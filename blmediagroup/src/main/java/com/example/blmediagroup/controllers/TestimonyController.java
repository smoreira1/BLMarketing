package com.example.blmediagroup.controllers;

import com.example.blmediagroup.models.Testimony;
import com.example.blmediagroup.services.TestimonyService;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;


@RestController
@RequestMapping(path = "/testimony")
public class TestimonyController {

    Logger logger = LoggerFactory.getLogger(TestimonyController.class);

    @Autowired
    private TestimonyService testimonyService;
    TestimonyController(TestimonyService testimonyService){
        this.testimonyService = testimonyService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Testimony> getTestimony(@PathVariable String id){
        Testimony testimony = this.testimonyService.getItem(id);
        if(testimony == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(testimony);
    }

    @GetMapping("")
    public ResponseEntity<ArrayList<Testimony>> getTestimonies(@PathVariable String id){
        try{
            ArrayList<Testimony> testimonies = this.testimonyService.getItems();
            return ResponseEntity.ok(testimonies);
        }
        catch(Exception e){
            this.logger.error(e.toString());
            return ResponseEntity.ok(new ArrayList<Testimony>());
        }
    }

    @ResponseBody
    @PostMapping("")
    public ResponseEntity<Void> createTestimony(@RequestBody Testimony testimony){
        this.testimonyService.createItem(testimony);
        return ResponseEntity.ok().build();
    }

    @ResponseBody
    @PutMapping("")
    public ResponseEntity<Void> updateTestimony(@RequestBody Testimony testimony){
        this.testimonyService.updateItem(testimony);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTestimony(@PathVariable String id){
        this.testimonyService.deleteItem(id);
        return ResponseEntity.ok().build();
    }
}
