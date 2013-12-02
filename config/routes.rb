CapybaraApp::Application.routes.draw do
  root to: 'welcome#index'
  get "/javascript" => "welcome#java"
  get "/quizzes" => "welcome#quizzes"
end
