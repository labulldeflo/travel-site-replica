<form role="search" method="get" class="search-form" action="<?php echo home_url('/'); ?>">
    <div class="search-input-wrapper">
        <input 
            type="search" 
            class="search-input" 
            placeholder="Rechercher..." 
            value="<?php echo get_search_query(); ?>" 
            name="s" 
            required
        />
        <button type="submit" class="search-submit btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
            </svg>
            Rechercher
        </button>
    </div>
</form>
