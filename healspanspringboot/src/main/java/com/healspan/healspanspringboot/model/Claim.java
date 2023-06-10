package com.healspan.healspanspringboot.model;

public class Claim {
    private long claimId;  // Use "ClaimId" instead of "claimId"
    private String name;  // Use "Name" instead of "name"
    private String ailment;
    private String sla;  // Use "SLA" instead of "sla"
    private String ptat;  // Use "PTAT" instead of "ptat"
    private String stage;
    private String status;
    private String amountApproved;
    private String hospital;

    public long getClaimId() {
        return claimId;
    }

    public void setClaimId(long claimId) {
        this.claimId = claimId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAilment() {
        return ailment;
    }

    public void setAilment(String ailment) {
        this.ailment = ailment;
    }

    public String getSla() {
        return sla;
    }

    public void setSla(String sla) {
        this.sla = sla;
    }

    public String getPtat() {
        return ptat;
    }

    public void setPtat(String ptat) {
        this.ptat = ptat;
    }

    public String getStage() {
        return stage;
    }

    public void setStage(String stage) {
        this.stage = stage;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAmountApproved() {
        return amountApproved;
    }

    public void setAmountApproved(String amountApproved) {
        this.amountApproved = amountApproved;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }
}
