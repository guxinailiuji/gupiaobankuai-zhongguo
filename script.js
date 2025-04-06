document.addEventListener('DOMContentLoaded', function() {
    const compactViewBtn = document.getElementById('compactViewBtn');
    const expandedViewBtn = document.getElementById('expandedViewBtn');
    const industryGrid = document.getElementById('industryGrid');
    
    // Toggle between compact and expanded views
    compactViewBtn.addEventListener('click', function() {
        industryGrid.classList.add('compact-view');
        compactViewBtn.classList.remove('bg-white', 'text-gray-800');
        compactViewBtn.classList.add('bg-gray-900', 'text-white');
        expandedViewBtn.classList.remove('bg-gray-900', 'text-white');
        expandedViewBtn.classList.add('bg-white', 'text-gray-800');
    });
    
    expandedViewBtn.addEventListener('click', function() {
        industryGrid.classList.remove('compact-view');
        expandedViewBtn.classList.remove('bg-white', 'text-gray-800');
        expandedViewBtn.classList.add('bg-gray-900', 'text-white');
        compactViewBtn.classList.remove('bg-gray-900', 'text-white');
        compactViewBtn.classList.add('bg-white', 'text-gray-800');
    });
    
    // Handle card click for mobile devices
    const industryCards = document.querySelectorAll('.industry-card');
    industryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (window.innerWidth < 768) {
                const isExpanded = this.classList.contains('expanded');
                
                // Close all other expanded cards
                document.querySelectorAll('.industry-card.expanded').forEach(expandedCard => {
                    if (expandedCard !== this) {
                        expandedCard.classList.remove('expanded');
                    }
                });
                
                // Toggle current card
                this.classList.toggle('expanded', !isExpanded);
            }
        });
    });
});
