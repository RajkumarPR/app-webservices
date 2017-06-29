package com.example.webservice.service;

import com.example.webservice.domain.Message;
import java.util.List;

/**
 * Service Interface for managing Message.
 */
public interface MessageService {

    /**
     * Save a message.
     *
     * @param message the entity to save
     * @return the persisted entity
     */
    Message save(Message message);

    /**
     *  Get all the messages.
     *
     *  @return the list of entities
     */
    List<Message> findAll();

    /**
     *  Get the "id" message.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    Message findOne(Long id);

    /**
     *  Delete the "id" message.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
