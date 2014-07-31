(ns pagentry.views.complector
  (:require
            [pagentry.views.css :as css]
            [pagentry.views.html :as page]))

(defn pagentry
  []
  (page/pagentry css/pagentry))
