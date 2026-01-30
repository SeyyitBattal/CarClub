package com.carclub.post_service.controller;

import com.carclub.post_service.entity.PostEntity;
import com.carclub.post_service.service.PostService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping("/")
    public List<PostEntity> findAll() {
       return postService.allPosts();
    }

    @GetMapping("/{id}")
    public Optional<PostEntity> findById(@PathVariable Long id) {
        return postService.findPostById(id);
    }

    @PostMapping("/")
    public PostEntity save(@RequestBody PostEntity postEntity) {
        return postService.createPost(postEntity);
    }

    @PutMapping("/{id}")
    public PostEntity update(@RequestBody PostEntity postEntity, @PathVariable Long id) {
        return postService.updatePost(postEntity,id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        postService.deletePostById(id);
    }

}
