--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS escala;
--
-- Name: escala; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE escala WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Portuguese_Brazil.1252' LC_CTYPE = 'Portuguese_Brazil.1252';


ALTER DATABASE escala OWNER TO postgres;

\connect escala

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: seq_escala; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_escala
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_escala OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: escala; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.escala (
    id integer DEFAULT nextval('public.seq_escala'::regclass),
    data date,
    horario time without time zone,
    local character varying(30) NOT NULL,
    ministro integer
);


ALTER TABLE public.escala OWNER TO postgres;

--
-- Name: ministros; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ministro (
    id integer NOT NULL,
    nome character varying(255) NOT NULL
);


ALTER TABLE public.ministro OWNER TO postgres;

--
-- Name: ministros_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ministro_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ministro_id_seq OWNER TO postgres;

--
-- Name: ministros_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ministro_id_seq OWNED BY public.ministro.id;


--
-- Name: seq_ministro; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.seq_ministro
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seq_ministro OWNER TO postgres;

--
-- Name: ministros id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ministro ALTER COLUMN id SET DEFAULT nextval('public.ministro_id_seq'::regclass);


--
-- Data for Name: escala; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (1, '2020-03-01', '07:00:00', 'SANTO EXPEDITO', 5);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (2, '2020-03-01', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 6);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (3, '2020-03-05', '19:30:00', 'SANTO EXPEDITO', 7);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (4, '2020-03-06', '19:30:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 1);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (5, '2020-03-07', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 1);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (6, '2020-03-08', '07:00:00', 'SANTO EXPEDITO', 3);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (7, '2020-03-08', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 10);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (8, '2020-03-10', '19:30:00', 'PIEADE', 7);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (9, '2020-03-12', '19:30:00', 'SANTO EXPEDITO', 1);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (10, '2020-03-14', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 8);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (11, '2020-03-15', '07:00:00', 'SANTO EXPEDITO', 2);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (12, '2020-03-15', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 5);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (13, '2020-03-19', '19:30:00', 'SANTO EXPEDITO', 7);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (14, '2020-03-21', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 1);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (15, '2020-03-22', '07:00:00', 'SANTO EXPEDITO', 5);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (16, '2020-03-22', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 4);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (17, '2020-03-26', '19:30:00', 'SANTO EXPEDITO', 1);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (18, '2020-03-28', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 5);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (19, '2020-03-29', '07:00:00', 'SANTO EXPEDITO', 9);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (20, '2020-03-29', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 8);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (21, '2020-03-01', '07:00:00', 'SANTO EXPEDITO', 2);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (22, '2020-03-01', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 7);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (23, '2020-03-05', '19:30:00', 'SANTO EXPEDITO', 8);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (24, '2020-03-06', '19:30:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 9);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (25, '2020-03-07', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 2);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (26, '2020-03-08', '07:00:00', 'SANTO EXPEDITO', 4);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (27, '2020-03-08', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 6);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (28, '2020-03-10', '19:30:00', 'PIEADE', 2);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (29, '2020-03-10', '19:30:00', 'PIEADE', 6);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (30, '2020-03-12', '19:30:00', 'SANTO EXPEDITO', 3);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (31, '2020-03-14', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 7);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (32, '2020-03-15', '07:00:00', 'SANTO EXPEDITO', 9);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (33, '2020-03-15', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 4);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (34, '2020-03-19', '19:30:00', 'SANTO EXPEDITO', 3);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (35, '2020-03-21', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 6);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (36, '2020-03-22', '07:00:00', 'SANTO EXPEDITO', 3);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (37, '2020-03-22', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 8);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (38, '2020-03-26', '19:30:00', 'SANTO EXPEDITO', 2);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (39, '2020-03-28', '19:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 7);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (40, '2020-03-29', '07:00:00', 'SANTO EXPEDITO', 6);
INSERT INTO public.escala (id, data, horario, local, ministro) VALUES (41, '2020-03-29', '17:00:00', 'NOSSA SENHORA DO PERPÉTUO SOCO', 4);


--
-- Data for Name: ministros; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.ministro (id, nome) VALUES (1, 'Luciano');
INSERT INTO public.ministro (id, nome) VALUES (2, 'Leda');
INSERT INTO public.ministro (id, nome) VALUES (3, 'Maria Helena');
INSERT INTO public.ministro (id, nome) VALUES (4, 'Maria José');
INSERT INTO public.ministro (id, nome) VALUES (5, 'Gleice');
INSERT INTO public.ministro (id, nome) VALUES (6, 'Sônia');
INSERT INTO public.ministro (id, nome) VALUES (7, 'Lourdes');
INSERT INTO public.ministro (id, nome) VALUES (8, 'Celene');
INSERT INTO public.ministro (id, nome) VALUES (9, 'Zélia');
INSERT INTO public.ministro (id, nome) VALUES (10, 'Dona Maria');


--
-- Name: ministros_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ministro_id_seq', 10, true);


--
-- Name: seq_escala; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_escala', 41, true);


--
-- Name: seq_ministro; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.seq_ministro', 10, true);


--
-- Name: escala escala_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.escala
    ADD CONSTRAINT escala_id_key UNIQUE (id);


--
-- Name: ministros ministros_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ministro
    ADD CONSTRAINT ministros_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

