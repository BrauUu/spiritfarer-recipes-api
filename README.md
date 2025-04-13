
# 📘 Spiritfarer Recipes API

Esta API fornece informações sobre receitas e ingredientes do jogo **Spiritfarer**. Você pode utilizá-la para consultar dados de receitas e seus respectivos ingredientes.

---

## 🔗 Rota Base

```
https://spiritfarer-recipes-api.onrender.com/
```

---

## 📙 Modelo: `/recipes`

### Modelo de Receita
```json
{
  "bookId": Number,
  "name": String,
  "description": String,
  "src": String (URL da imagem),
  "size": "Lanchinho"|"Pequeno"|"Médio"|"Grande",
  "type": "Gosto Adquirido"|"Café da Manhã"|"Cozinha Afetiva"|"Sobremesa"|"Exótico"|"Refinado"|"Saudável"|"Tradicional"|"Simples"|"De Bar"|"Salada"|"Sopa"|"Estimulante"|"Outro",
  "ingredients": [
    {
      "name": String (ou múltiplas nomes separadas por `/`),
      "src": String (ou múltiplas URLs separadas por `|`),
      "ids": [Number]
    }
  ]
}
```

### 🔹 GET `/recipes/`

Retorna uma lista com todas as receitas.

#### ✅ Exemplo de resposta:
```json
[
    {
        ...
    },
    {
        "bookId": 3,
        "name": "Pipoca",
        "description": "Pipoca! Pipoca! Pipoca!",
        "src": "https://images2.imgbox.com/18/df/wG0V5OLt_o.png",
        "size": "Lanchinho",
        "type": "Cozinha Afetiva",
        "ingredients": [
            {
                "name": "Milho",
                "src": "https://images2.imgbox.com/10/30/dm4xHHMC_o.png",
                "ids": [
                    1
                ]
            }
        ]
    },
    {
        "bookId": 4,
        "name": "Frutas em Calda",
        "description": "Uma sobremesa muito simples. Sacia um pouco mais do que as frutas cruas e é mais fácil de mastigar.",
        "src": "https://images2.imgbox.com/8c/c4/T6187rcO_o.png",
        "size": "Pequeno",
        "type": "Sobremesa",
        "ingredients": [
            {
                "name": "Fruta",
                "src": "https://images2.imgbox.com/0e/44/QCfN7DN7_o.png",
                "ids": [
                    67,
                    68,
                    69,
                    70,
                    72,
                    74,
                    75
                ]
            }
        ]
    },
    {
        ...
    }
]
```
---

### 🔹 GET `/recipes/:bookId`

Retorna os detalhes de uma receita específica com base no `bookId`.

#### 🔸 Parâmetros:
- `bookId` — ID da receita (númerico).

#### ✅ Exemplo de resposta:
```json
{
    "bookId": 13,
    "name": "Pão",
    "description": "Uma fatia diária de uma delícia fofinha.",
    "src": "https://images2.imgbox.com/bd/43/BnOb4TMa_o.png",
    "size": "Pequeno",
    "type": "Simples",
    "ingredients": [
        {
            "name": "Farinha de Trigo/Farinha de Milho",
            "src": "https://images2.imgbox.com/9d/a0/Su2l0VTj_o.png|https://images2.imgbox.com/da/f8/17hZq8EU_o.png",
            "ids": [
                4,
                5
            ]
        }
    ]
}
```

---

## 📙 Modelo: `/ingredients`

### Modelo de Ingrediente
```json
{
  "id": Number,
  "name": String,
  "description": String,
  "src": String (URL da imagem),
  "type": "Grãos"|"Ingredientes"|"Pesca"|"Frutas e Verduras"|"Madeira"
}

```
### 🔹 GET `/ingredients/`

Retorna uma lista com todos os ingredientes.

#### ✅ Exemplo de resposta:
```json
[
    {
        ...
    },
    {
        "id": 2,
        "name": "Trigo",
        "description": "Trigo é o GRÃO que entra em praticamente tudo. Pode ser transformado em FARINHA DE TRIGO em um MOINHO.",
        "src": "https://images2.imgbox.com/5e/26/AITtHz6Q_o.png",
        "type": "Grãos"
    },
    {
        "id": 3,
        "name": "Arroz",
        "description": "Arroz é um GRÃO especial cultivado em água. Ideal para pratos simples ou para fazer FARINHA DE ARROZ em um moinho.",
        "src": "https://images2.imgbox.com/b4/11/GVmqQjFt_o.png",
        "type": "Grãos"
    },
    {
        ...
    }
]
```

---

### 🔹 GET `/ingredients/:id`

Retorna os detalhes de um ingrediente específico com base no `id`.

#### 🔸 Parâmetros:
- `id` — ID do ingrediente (númerico).

#### ✅ Exemplo de resposta:
```json
{
    "id": 28,
    "name": "Salmão-azul",
    "description": "O salmão azul é um PEIXE de tamanho médio que tem um sabor melhor quando você pensa em outro tipo de PEIXE.",
    "src": "https://images2.imgbox.com/e2/72/fIrea7ss_o.png",
    "type": "Pesca"
}
```

---

## 📌 Observações

- Todos os dados são retornados em formato **JSON**.
- Não é necessário nenhum tipo autenticação para buscar os dados.