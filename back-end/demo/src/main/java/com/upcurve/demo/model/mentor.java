package com.upcurve.demo.model;

import javax.persistence.*;

@Entity
@Table(name="mentor")
public class mentor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name="experience")
    private int experience;
    @Column(name="mailId")
    private String mailId;
    @Column(name="topic")
    private String topic;
    public mentor() {
    }

    public mentor(String name, int experience, String mailId, String topic) {
        this.name = name;
        this.experience = experience;
        this.mailId = mailId;
        this.topic = topic;
        //LocalDate = localDate;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getMailId() {
        return mailId;
    }

    public void setMailId(String mailId) {
        this.mailId = mailId;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

}
