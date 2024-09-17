# MindEase Sample Project
> MindEase Sample Project Assignment

## Table of Contents
+ [Project Description](#project-description)
+ [Components](#components)
+ [Functional Requirements](#functional-requirements)
+ [Note](#note)

## Project Description
* Web Interface takes user input, sends to an API.
* Process and send to OpenAI.
* Fetch Response, format and relay back to UI.

## Components
* UI - React, Tailwind, Libs (Axios, Shadcn)
* API - Azure Functions/Flask, OpenAI Py Client

## Functional Requirements
* Chatbot based UI. 
* Backend should store state of conversation (Q: backends should almost always be stateless, so that
  we can recover from failures fast, with no loss of state. State should be decoupled, and ideally delegated
  to a datastore)
* Additional: Database. Will store all conversation into the database.
* Repeat or end conversation.

## Note
* I will use Cohere instead of OpenAI's API, as I do not have its subscription. 
* It would be a drop-in replacement, so that there would be minimal code changes switching to GPT.
* I have attached all docs and notes around design, code, etc in the `notes/` directory.

Thanks.
