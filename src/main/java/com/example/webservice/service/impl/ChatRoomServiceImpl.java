package com.example.webservice.service.impl;

import com.example.webservice.service.ChatRoomService;
import com.example.webservice.domain.ChatRoom;
import com.example.webservice.repository.ChatRoomRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing ChatRoom.
 */
@Service
@Transactional
public class ChatRoomServiceImpl implements ChatRoomService{

    private final Logger log = LoggerFactory.getLogger(ChatRoomServiceImpl.class);

    private final ChatRoomRepository chatRoomRepository;

    public ChatRoomServiceImpl(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }

    /**
     * Save a chatRoom.
     *
     * @param chatRoom the entity to save
     * @return the persisted entity
     */
    @Override
    public ChatRoom save(ChatRoom chatRoom) {
        log.debug("Request to save ChatRoom : {}", chatRoom);
        return chatRoomRepository.save(chatRoom);
    }

    /**
     *  Get all the chatRooms.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<ChatRoom> findAll() {
        log.debug("Request to get all ChatRooms");
        return chatRoomRepository.findAll();
    }

    /**
     *  Get one chatRoom by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public ChatRoom findOne(Long id) {
        log.debug("Request to get ChatRoom : {}", id);
        return chatRoomRepository.findOne(id);
    }

    /**
     *  Delete the  chatRoom by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete ChatRoom : {}", id);
        chatRoomRepository.delete(id);
    }
}
