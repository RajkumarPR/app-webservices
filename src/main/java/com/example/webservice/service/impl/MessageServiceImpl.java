package com.example.webservice.service.impl;

import com.example.webservice.service.MessageService;
import com.example.webservice.domain.Message;
import com.example.webservice.repository.MessageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing Message.
 */
@Service
@Transactional
public class MessageServiceImpl implements MessageService{

    private final Logger log = LoggerFactory.getLogger(MessageServiceImpl.class);

    private final MessageRepository messageRepository;

    public MessageServiceImpl(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    /**
     * Save a message.
     *
     * @param message the entity to save
     * @return the persisted entity
     */
    @Override
    public Message save(Message message) {
        log.debug("Request to save Message : {}", message);
        return messageRepository.save(message);
    }

    /**
     *  Get all the messages.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<Message> findAll() {
        log.debug("Request to get all Messages");
        return messageRepository.findAll();
    }

    /**
     *  Get one message by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Message findOne(Long id) {
        log.debug("Request to get Message : {}", id);
        return messageRepository.findOne(id);
    }

    /**
     *  Delete the  message by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Message : {}", id);
        messageRepository.delete(id);
    }
}
