package br.com.backend.springbootapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.backend.springbootapi.entity.Tarefa;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> { }