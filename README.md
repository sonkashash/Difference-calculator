### Вычислитель отличий:
[![Actions Status](https://github.com/sonkashash/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/sonkashash/frontend-project-46/actions)
[![Actions Status](https://github.com/sonkashash/frontend-project-46/actions/workflows/main.yml/badge.svg)](https://github.com/sonkashash/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/34370a0f6e8751b804f1/maintainability)](https://codeclimate.com/github/sonkashash/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/34370a0f6e8751b804f1/test_coverage)](https://codeclimate.com/github/sonkashash/frontend-project-46/test_coverage)
----------------------------------
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. 

1. Возможности утилиты:

* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json

2. Возможные команды
* [Вывод справки + вычисление отличий в двух файлах ( формат JSON )](https://asciinema.org/a/XwyGiQpguPxrztKLGBbgkGpWj)
     ```
     gendiff -h
     gendiff <file1.json><file2.json>
     ```

* [Вычисление отличий в двух файлах ( формат YAMl )](https://asciinema.org/a/L0LyBqMdWYMtc8gl0K4QyKSFF)
    ```
     gendiff <file1.yml><file2.yml>
     ```
* [Вычисление отличий в файлах с вложенными структурами](https://asciinema.org/a/u5kab3OIz0vvc5tqEd7ohWB7J)
  
     ```
     gendiff <file1.json><file2.yml>
     ```

     
