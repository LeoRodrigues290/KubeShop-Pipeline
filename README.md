# KubeShop - Pipeline

KubeShop é uma aplicação de e-commerce containerizada com Docker, orquestrada pelo Kubernetes e automatizada com um pipeline CI/CD no Jenkins. O projeto visa fornecer uma solução escalável e eficiente para implantar aplicações web na nuvem AWS.

Projetado para desenvolvedores e equipes que buscam automatizar o processo de implantação de aplicações containerizadas em um ambiente Kubernetes. Utilizando Docker para containerização, Kubernetes para orquestração e Jenkins para automação de pipeline, o KubeShop garante implantações contínuas e confiáveis na nuvem AWS.

## Arquitetura

A arquitetura do KubeShop é composta pelos seguintes componentes:

- **Docker**: Containeriza a aplicação para garantir portabilidade e consistência entre ambientes.
- **Kubernetes**: Gerencia a orquestração dos contêineres, proporcionando escalabilidade e alta disponibilidade.
- **Jenkins**: Automatiza o pipeline CI/CD, desde o build até a implantação na nuvem.

## Funcionalidades

- **Containerização**: Empacotamento da aplicação em contêineres Docker.
- **Orquestração**: Gerenciamento de contêineres com Kubernetes.
- **Automação**: Pipeline CI/CD com Jenkins para builds e implantações automatizadas.
- **Escalabilidade**: Capacidade de escalar horizontalmente conforme a demanda.
- **Implantação na Nuvem**: Utilização de AWS EC2 para hospedagem e gerenciamento de recursos.

## Pré-requisitos

- Docker instalado (versão 19.x ou superior)
- Jenkins instalado e configurado
- Git instalado (para clonagem do repositório)

## Instalação

1. **Clonar o repositório**


2. **Construir a imagem Docker**

    ```bash
    docker build -t kubeshop-app .
    ```

3. **Enviar a imagem para o Docker Registry**

    ```bash
    docker tag kubeshop-app seuusuario/kubeshop-app:v1.0
    docker push seuusuario/kubeshop-app:v1.0
    ```

4. **Implantar no Kubernetes**

    ```bash
    kubectl apply -f kubernetes/deployment.yaml
    kubectl apply -f kubernetes/service.yaml
    ```

5. **Configurar o Jenkins Pipeline**
    - Acesse o Jenkins e crie um novo pipeline.
    - Configure o `Jenkinsfile` localizado no repositório para automatizar o build e a implantação.

## Uso

1. **Acessar a aplicação**
    - Após a implantação, a aplicação estará disponível no endereço IP externo do serviço Kubernetes.

    ```bash
    kubectl get svc kubeshop-service
    ```

2. **Testar a aplicação**
    - Acesse `http://<EXTERNAL_IP>:<PORT>` em seu navegador para visualizar a aplicação.

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request para sugestões e melhorias.

## Licença

Este projeto está licenciado sob a MIT License.

## Futuras Implementações

- **Integração com Terraform**: Automatizar a infraestrutura como código para provisionar recursos na AWS.
- **Monitoramento com Prometheus e Grafana**: Implementar monitoramento e alertas para a aplicação e infraestrutura.
- **Automação com Ansible**: Gerenciar configurações e automação de tarefas repetitivas.
- **Segurança com Snyk**: Integrar análise de vulnerabilidades no pipeline CI/CD.
- **Testes Automatizados com Selenium e Jest**: Implementar testes de interface e unitários para garantir a qualidade do código.
