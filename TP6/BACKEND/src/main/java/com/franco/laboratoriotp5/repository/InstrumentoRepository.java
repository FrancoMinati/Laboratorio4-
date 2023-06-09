package com.franco.laboratoriotp5.repository;

import com.franco.laboratoriotp5.entity.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentoRepository extends JpaRepository<Instrumento, Long>  {
}
