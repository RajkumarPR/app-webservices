package com.example.webservice.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A ChatRoom.
 */
@Entity
@Table(name = "chat_room")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ChatRoom implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Size(min = 3, max = 20)
    @Column(name = "name", length = 20, nullable = false)
    private String name;

    @OneToMany(mappedBy = "chatRoom")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Message> messages = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public ChatRoom name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Message> getMessages() {
        return messages;
    }

    public ChatRoom messages(Set<Message> messages) {
        this.messages = messages;
        return this;
    }

    public ChatRoom addMessage(Message message) {
        this.messages.add(message);
        message.setChatRoom(this);
        return this;
    }

    public ChatRoom removeMessage(Message message) {
        this.messages.remove(message);
        message.setChatRoom(null);
        return this;
    }

    public void setMessages(Set<Message> messages) {
        this.messages = messages;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ChatRoom chatRoom = (ChatRoom) o;
        if (chatRoom.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), chatRoom.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ChatRoom{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
