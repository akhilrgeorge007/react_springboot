package com.healspan.healspanspringboot.model;

import java.util.List;

public class FilterRequest {
    private List<String> stage;
    private List<String> status;

    public List<String> getStage() {
        return stage;
    }

    public void setStage(List<String> stage) {
        this.stage = stage;
    }

    public List<String> getStatus() {
        return status;
    }

    public void setStatus(List<String> status) {
        this.status = status;
    }
}
