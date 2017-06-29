package com.example.webservice.service;

import com.example.webservice.domain.ChatRoom;
import java.util.List;

/**
 * Service Interface for managing ChatRoom.
 */
public interface ChatRoomService {

    /**
     * Save a chatRoom.
     *
     * @param chatRoom the entity to save
     * @return the persisted entity
     */
    ChatRoom save(ChatRoom chatRoom);

    /**
     *  Get all the chatRooms.
     *
     *  @return the list of entities
     */
    List<ChatRoom> findAll();

    /**
     *  Get the "id" chatRoom.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    ChatRoom findOne(Long id);

    /**
     *  Delete the "id" chatRoom.
     *
     *  @param id the id of the entity
     */
    void delete(Long id);
}
