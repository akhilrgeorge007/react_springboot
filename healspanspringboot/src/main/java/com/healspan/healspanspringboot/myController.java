package com.healspan.healspanspringboot;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.healspan.healspanspringboot.model.Claim;

import com.healspan.healspanspringboot.model.FilterRequest;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
public class myController {

    @GetMapping("/welcome")
    public String firstApi(){
        return "Welcome to springboot";
    }

    @PostMapping("/claims")
    public ResponseEntity<List<Claim>> getFilteredClaims(@RequestBody FilterRequest filterRequest) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        InputStream inputStream = getClass().getClassLoader().getResourceAsStream("data.json");
        List<Claim> claims = objectMapper.readValue(inputStream, new TypeReference<List<Claim>>() {});
        inputStream.close();

        List<String> stages = filterRequest.getStage();
        List<String> statuses = filterRequest.getStatus();

        if (stages != null && !stages.isEmpty()) {
            claims = claims.stream()
                    .filter(claim -> stages.contains(claim.getStage()))
                    .collect(Collectors.toList());
        }

        if (statuses != null && !statuses.isEmpty()) {
            claims = claims.stream()
                    .filter(claim -> statuses.contains(claim.getStatus()))
                    .collect(Collectors.toList());
        }

        return ResponseEntity.ok(claims);
    }
}
