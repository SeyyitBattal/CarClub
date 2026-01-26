package com.carclub.post_service.service;

import com.carclub.post_service.entity.PostEntity;
import com.carclub.post_service.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostEntity> allPosts (){
        return postRepository.findAll();
    }

    public Optional<PostEntity> findPostById(String id) {
        return postRepository.findById(id);
    }

    public PostEntity createPost(PostEntity postEntity) {
        return postRepository.save(postEntity);
    }

    public PostEntity updatePost(PostEntity postEntity, String id) {
        if (postRepository.findById(id).isPresent()) {
            postEntity.setId(id);
            return postRepository.save(postEntity);
        }else  {
            return null;
        }
    }

    public Optional<PostEntity> deletePostById(String id) {
        postRepository.deleteById(id);
        return postRepository.findById(id);
    }

}
