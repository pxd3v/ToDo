package br.com.backend.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.backend.springbootapi.entity.Tarefa;
import br.com.backend.springbootapi.repository.TarefaRepository;

@CrossOrigin
@RestController
public class TarefaController {
    @Autowired
    private TarefaRepository _tarefaRepository;

    @RequestMapping(value = "/tarefa", method = RequestMethod.GET)
    public List<Tarefa> Get() {
        return _tarefaRepository.findAll();
    }

    @RequestMapping(value = "/tarefa/{id}", method = RequestMethod.GET)
    public ResponseEntity<Tarefa> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Tarefa> tarefa = _tarefaRepository.findById(id);
        if(tarefa.isPresent())
            return new ResponseEntity<Tarefa>(tarefa.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/tarefa", method =  RequestMethod.POST)
    public Tarefa Post(@Valid @RequestBody Tarefa tarefa)
    {
        return _tarefaRepository.save(tarefa);
    }

    @RequestMapping(value = "/tarefa/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Tarefa> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Tarefa newTarefa)
    {
        Optional<Tarefa> oldTarefa = _tarefaRepository.findById(id);
        if(oldTarefa.isPresent()){
            Tarefa tarefa = oldTarefa.get();
            tarefa.setTitulo(newTarefa.getTitulo());
            tarefa.setDescricao(newTarefa.getDescricao());
            tarefa.setStatus(newTarefa.getStatus());
            _tarefaRepository.save(tarefa);
            return new ResponseEntity<Tarefa>(tarefa, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/tarefa/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Tarefa> tarefa = _tarefaRepository.findById(id);
        if(tarefa.isPresent()){
            _tarefaRepository.delete(tarefa.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}