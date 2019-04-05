Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
  get 'category/index'
  get 'welcome/index'
  get 'category/:kind', to: 'category#show'
  get 'dummy', to: 'category#toolkit'
  get 'category/:kind/:id', to: 'category#display'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#index'
end
